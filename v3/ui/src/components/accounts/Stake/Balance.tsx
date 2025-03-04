import { Badge, Link, Text } from '@chakra-ui/react';
import { BigNumber, utils } from 'ethers';
import { FC, useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { chainIdState } from '../../../utils/state';
import { Amount } from '../../shared/Amount/Amount';

interface Props {
  balance: BigNumber;
  decimals: number;
  symbol: string;
  address: string;
  onMax?: (balance: string) => void;
}

export const Balance: FC<Props> = ({ balance, decimals, symbol, address, onMax }) => {
  const [localChainId] = useRecoilState(chainIdState);

  const buyAssetLink = useMemo(() => {
    if (localChainId === 1) {
      return `https://app.1inch.io/#/1/unified/swap/ETH/${symbol.toUpperCase()}`;
    } else if (localChainId === 10) {
      return `https://app.1inch.io/#/10/unified/swap/ETH/${symbol.toUpperCase()}`;
    } else if (localChainId === 5) {
      return `https://goerli.etherscan.io/address/${address}#writeContract`;
    } else if (localChainId === 420) {
      return `https://goerli-optimism.etherscan.io/address/${address}#writeContract`;
    }
  }, [address, localChainId, symbol]);

  const formattedBalance = utils.formatUnits(balance, decimals);
  return (
    <Text display="flex" gap={2} alignItems="center" fontSize="xs">
      Balance:
      <Amount value={formattedBalance} suffix={` ${symbol.toUpperCase()}`} />
      {balance.eq(0) && buyAssetLink && (
        <Link href={buyAssetLink} isExternal>
          <Badge ml="1" variant="outline" transform="translateY(-1px)">
            Buy {symbol}
          </Badge>
        </Link>
      )}
      {onMax && !balance.eq(0) && (
        <Badge
          as="button"
          variant="outline"
          onClick={(e) => {
            e.preventDefault();
            onMax(formattedBalance);
          }}
        >
          Use Max
        </Badge>
      )}
    </Text>
  );
};

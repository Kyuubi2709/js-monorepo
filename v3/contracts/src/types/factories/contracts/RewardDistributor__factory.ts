/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  RewardDistributor,
  RewardDistributorInterface,
} from "../../contracts/RewardDistributor";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "poolId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "payout",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061018a806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80634892da8d14610030575b600080fd5b61004361003e366004610110565b610057565b604051901515815260200160405180910390f35b60405163a9059cbb60e01b815273ffffffffffffffffffffffffffffffffffffffff8381166004830152602482018390526000919085169063a9059cbb906044016020604051808303816000875af11580156100b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100db9190610154565b50600195945050505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461010b57600080fd5b919050565b6000806000806080858703121561012657600080fd5b84359350610136602086016100e7565b9250610144604086016100e7565b9396929550929360600135925050565b60006020828403121561016657600080fd5b8151801515811461017657600080fd5b939250505056fea164736f6c634300080d000a";

type RewardDistributorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RewardDistributorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RewardDistributor__factory extends ContractFactory {
  constructor(...args: RewardDistributorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RewardDistributor> {
    return super.deploy(overrides || {}) as Promise<RewardDistributor>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RewardDistributor {
    return super.attach(address) as RewardDistributor;
  }
  override connect(signer: Signer): RewardDistributor__factory {
    return super.connect(signer) as RewardDistributor__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RewardDistributorInterface {
    return new utils.Interface(_abi) as RewardDistributorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RewardDistributor {
    return new Contract(address, _abi, signerOrProvider) as RewardDistributor;
  }
}

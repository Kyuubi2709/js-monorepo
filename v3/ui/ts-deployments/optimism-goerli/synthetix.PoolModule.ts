export const address = '0x42b79F0e3A67433F24a28E164c25422633003eFA';
export const abi = [
  'error EmptyDistribution()',
  'error InvalidParameters(string incorrectParameter, string help)',
  'error MarketNotFound(uint128 marketId)',
  'error PoolAlreadyExists(uint128 poolId)',
  'error PoolNotFound(uint128 poolId)',
  'error Unauthorized(address addr)',
  'error ZeroAddress()',
  'event NominatedPoolOwner(uint128 indexed poolId, address indexed owner)',
  'event PoolConfigurationSet(uint128 indexed poolId, uint128[] indexed markets, uint256[] indexed weights, address executedBy)',
  'event PoolCreated(uint128 indexed poolId, address indexed owner)',
  'event PoolNameUpdated(uint128 indexed poolId, string indexed name, address indexed sender)',
  'event PoolNominationRenounced(uint128 indexed poolId, address indexed owner)',
  'event PoolNominationRevoked(uint128 indexed poolId, address indexed owner)',
  'event PoolOwnershipAccepted(uint128 indexed poolId, address indexed owner)',
  'event PoolOwnershipRenounced(uint128 indexed poolId, address indexed owner)',
  'function acceptPoolOwnership(uint128 poolId)',
  'function createPool(uint128 requestedPoolId, address owner)',
  'function getMinLiquidityRatio() view returns (uint256)',
  'function getNominatedPoolOwner(uint128 poolId) view returns (address)',
  'function getPoolConfiguration(uint128 poolId) view returns (uint256[], uint256[], int256[])',
  'function getPoolName(uint128 poolId) view returns (string poolName)',
  'function getPoolOwner(uint128 poolId) view returns (address)',
  'function nominatePoolOwner(address nominatedOwner, uint128 poolId)',
  'function renouncePoolNomination(uint128 poolId)',
  'function renouncePoolOwnership(uint128 poolId)',
  'function setMinLiquidityRatio(uint256 minLiquidityRatio)',
  'function setPoolConfiguration(uint128 poolId, uint128[] markets, uint256[] weights, int256[] maxDebtShareValues)',
  'function setPoolName(uint128 poolId, string name)',
];

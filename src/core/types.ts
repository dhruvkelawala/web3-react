import { Provider } from 'starknet';
import { AbstractConnector } from '../AbstractConnector';

export interface StarknetReactManagerFunctions {
  activate: (
    connector: AbstractConnector,
    onError?: (error: Error | unknown) => void,
    throwsError?: boolean
  ) => Promise<void>;
  setError: (error: Error) => void;
  deactivate: () => void;
}

export interface StarknetReactManagerReturn
  extends StarknetReactManagerFunctions {
  connector?: AbstractConnector;
  provider?: Provider;
  chainId?: number;
  account?: null | string;

  error?: Error;
}

export interface StarknetReactContextInterface<T = any>
  extends StarknetReactManagerFunctions {
  connector?: AbstractConnector;
  library?: T;
  chainId?: number;
  account?: null | string;

  active: boolean;
  error?: Error;
}

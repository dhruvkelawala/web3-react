import { Provider, SignerInterface } from 'starknet';

export type EventHandler = (accounts: string[]) => void;

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface IStarketWindowObject {
  enable: () => Promise<string[]>;
  on: (method: 'accountsChanged', handleEvent: EventHandler) => void;
  off: (event: 'accountsChanged', handleEvent: EventHandler) => void;
  signer?: SignerInterface;
  provider: Provider;
  selectedAddress?: string;
}

interface ConnectedStarketWindowObject extends IStarketWindowObject {
  isConnected: true;
  signer: SignerInterface;
  selectedAddress: string;
}

interface DisconnectedStarketWindowObject extends IStarketWindowObject {
  isConnected: false;
}

export type StarknetWindowObject =
  | ConnectedStarketWindowObject
  | DisconnectedStarketWindowObject;

declare global {
  interface Window {
    starknet?: StarknetWindowObject;
  }
}

declare const __DEV__: boolean;

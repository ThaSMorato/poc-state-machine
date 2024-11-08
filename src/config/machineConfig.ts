export interface MachineStep {
  name: string;
  state: string;
  token: string;
}

export interface MachineUseCase {
  onEnter: (entity: MachineEntity) => Promise<void>;
  onExit: (entity: MachineEntity) => Promise<void>;
  transit: (entity: MachineEntity) => Promise<void>;
}

export interface MachineConfig {
  [state: string]: MachineStep;
}

export interface MachineEntity {
  state: string;
  result: {
    isLeft: boolean
    isRight: boolean
    result?: Error | Record<string, any>
  }
}

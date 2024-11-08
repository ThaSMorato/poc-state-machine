import { MachineEntity, MachineUseCase } from "../config/machineConfig";
import { BaseUseCase } from "./useCase";

export class UseCase2 extends BaseUseCase {
  token = 'UseCase2';

  async onLeft(entity: MachineEntity): Promise<void> {
    entity.state = 'state4';
  }

  async onRight(entity: MachineEntity): Promise<void> {
    entity.state = 'state1';
  }

  async onEnter(entity: MachineEntity): Promise<void> {
    console.log('UseCase2 onEnter');
  }

  async onExit(entity: MachineEntity): Promise<void> {
    console.log('UseCase2 onExit');
  }

  async execute(entity: MachineEntity): Promise<void> {
    console.log('UseCase2 execute');
    const result = Math.random() > 0.5;
    if (result) {
      entity.result.isRight = true;
    } else {
      entity.result.isLeft = true;
    }
  }
}

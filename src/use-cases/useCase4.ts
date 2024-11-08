import { MachineEntity, MachineUseCase } from "../config/machineConfig";
import { BaseUseCase } from "./useCase";

export class UseCase4 extends BaseUseCase {
  token = 'UseCase4';

  async onLeft(entity: MachineEntity): Promise<void> {
    entity.state = 'state1';
  }

  async onRight(entity: MachineEntity): Promise<void> {
    entity.state = 'state3';
  }

  async onEnter(entity: MachineEntity): Promise<void> {
    console.log('UseCase4 onEnter');
  }

  async onExit(entity: MachineEntity): Promise<void> {
    console.log('UseCase4 onExit');
  }

  async execute(entity: MachineEntity): Promise<void> {
    console.log('UseCase4 execute');
    const result = Math.random() > 0.5;
    if (result) {
      entity.result.isRight = true;
    } else {
      entity.result.isLeft = true;
    }
  }
}

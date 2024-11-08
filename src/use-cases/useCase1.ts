import { MachineEntity, MachineUseCase } from "../config/machineConfig";
import { BaseUseCase } from "./useCase";

export class UseCase1 extends BaseUseCase {
  token = 'UseCase1';

  async onLeft(entity: MachineEntity): Promise<void> {
    entity.state = 'state2';
  }

  async onRight(entity: MachineEntity): Promise<void> {
    entity.state = 'state3';
  }

  async onEnter(entity: MachineEntity): Promise<void> {
    console.log('UseCase1 onEnter');
  }

  async onExit(entity: MachineEntity): Promise<void> {
    console.log('UseCase1 onExit');
  }

  async execute(entity: MachineEntity): Promise<void> {
    console.log('UseCase1 execute');
    const result = Math.random() > 0.5;
    if (result) {
      entity.result.isRight = true;
    } else {
      entity.result.isLeft = true;
    }
  }
}

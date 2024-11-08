import { MachineEntity, MachineUseCase } from "../config/machineConfig";
import { BaseUseCase } from "./useCase";

export class UseCase3 extends BaseUseCase {
  static token = 'UseCase3';

  async onLeft(entity: MachineEntity): Promise<void> {
    entity.state = 'ERROR';
    entity.result.result = new Error('UseCase3 onLeft');
  }

  async onRight(entity: MachineEntity): Promise<void> {
    entity.state = 'state5';
    entity.result.result = {
      message: 'UseCase3 onRight',
      data: Math.random()
    }
  }

  async onEnter(entity: MachineEntity): Promise<void> {
    console.log('UseCase3 onEnter');
  }

  async onExit(entity: MachineEntity): Promise<void> {
    console.log('UseCase3 onExit');
  }

  async execute(entity: MachineEntity): Promise<void> {
    console.log('UseCase3 execute');
    const result = Math.random() > 0.5;
    if (result) {
      entity.result.isRight = true;
    } else {
      entity.result.isLeft = true;
    }
  }
}

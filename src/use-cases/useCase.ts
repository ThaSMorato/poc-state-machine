import { MachineEntity, MachineUseCase } from "../config/machineConfig";

export abstract class BaseUseCase implements MachineUseCase {
  abstract onEnter(entity: MachineEntity): Promise<void>;
  abstract onExit(entity: MachineEntity): Promise<void>;
  abstract token: string;

  abstract execute(entity: MachineEntity): Promise<void>;

  async onLeft(entity: MachineEntity): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async onRight(entity: MachineEntity): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async _onEnter(entity: MachineEntity) {
    entity.result.isLeft = false
    entity.result.isRight = false
    await this.onEnter(entity);
  }

  async _onExit(entity: MachineEntity) {
    if (entity.result.isLeft) {
      await this.onLeft(entity);
    } else if (entity.result.isRight) {
      await this.onRight(entity);
    }
    await this.onExit(entity);
  }

  async transit(entity: MachineEntity) {
    await this._onEnter(entity);
    await this.execute(entity);
    await this._onExit(entity);
  }
}

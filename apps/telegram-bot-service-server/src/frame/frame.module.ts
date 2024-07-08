import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FrameModuleBase } from "./base/frame.module.base";
import { FrameService } from "./frame.service";
import { FrameController } from "./frame.controller";
import { FrameResolver } from "./frame.resolver";

@Module({
  imports: [FrameModuleBase, forwardRef(() => AuthModule)],
  controllers: [FrameController],
  providers: [FrameService, FrameResolver],
  exports: [FrameService],
})
export class FrameModule {}

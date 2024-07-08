import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FrameService } from "./frame.service";
import { FrameControllerBase } from "./base/frame.controller.base";

@swagger.ApiTags("frames")
@common.Controller("frames")
export class FrameController extends FrameControllerBase {
  constructor(
    protected readonly service: FrameService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

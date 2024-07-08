/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { FrameWhereUniqueInput } from "../../frame/base/FrameWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class FrameUpdateManyWithoutBotsInput {
  @Field(() => [FrameWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FrameWhereUniqueInput],
  })
  connect?: Array<FrameWhereUniqueInput>;

  @Field(() => [FrameWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FrameWhereUniqueInput],
  })
  disconnect?: Array<FrameWhereUniqueInput>;

  @Field(() => [FrameWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FrameWhereUniqueInput],
  })
  set?: Array<FrameWhereUniqueInput>;
}

export { FrameUpdateManyWithoutBotsInput as FrameUpdateManyWithoutBotsInput };
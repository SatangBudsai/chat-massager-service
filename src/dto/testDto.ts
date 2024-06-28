import { ApiProperty } from '@nestjs/swagger';

export class TestDto {
  @ApiProperty()
  massage?: string;
  @ApiProperty()
  user_read?: string;
  @ApiProperty()
  created_time?: string | Date;
  @ApiProperty()
  update_time?: string | Date;
  @ApiProperty()
  user_send_id?: string;
  @ApiProperty()
  app_management: string;
  @ApiProperty()
  conversation?: string;
}

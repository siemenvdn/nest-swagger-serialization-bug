import { ApiProperty } from '@nestjs/swagger';

class GetHelloNested {
  @ApiProperty({ type: String })
  name: string;
}

export class GetHello {
  @ApiProperty({ type: GetHelloNested })
  info: GetHelloNested;
}

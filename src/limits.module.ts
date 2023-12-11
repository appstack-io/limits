import { Module } from '@nestjs/common';
import { RpcRateLimitReadInterceptor } from './rpcRateLimitRead.interceptor';
import { RpcRateLimitWriteInterceptor } from './rpcRateLimitWrite.interceptor';
import { Utils } from './utils';
import { RedisModule } from '@appstack-io/redis';

@Module({
  imports: [RedisModule],
  providers: [RpcRateLimitReadInterceptor, RpcRateLimitWriteInterceptor, Utils],
  exports: [RpcRateLimitReadInterceptor, RpcRateLimitWriteInterceptor, Utils],
})
export class LimitsModule {}

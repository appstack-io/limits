import { Module } from '@nestjs/common';
import { RpcRateLimitReadInterceptor } from './rpcRateLimitRead.interceptor';
import { RpcRateLimitWriteInterceptor } from './rpcRateLimitWrite.interceptor';
import { Utils } from './utils';

@Module({
  providers: [RpcRateLimitReadInterceptor, RpcRateLimitWriteInterceptor, Utils],
  exports: [RpcRateLimitReadInterceptor, RpcRateLimitWriteInterceptor],
})
export class LimitsModule {}

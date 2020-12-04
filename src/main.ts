import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RedisIoAdapter } from './common/adapter/redis.adapter';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true });

    app.enableCors({
        methods: ['GET', 'POST']
    });

    app.useWebSocketAdapter(new RedisIoAdapter(app));

    await app.listen(3000);
}
bootstrap();

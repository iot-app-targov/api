import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';

import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './common/guards/jwtAuth.guard';
import { LocalAuthGuard } from './common/guards/localAuth.guard';

@Controller()
export class AppController {
    constructor(private readonly authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    public async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    public getProfile(@Request() req) {
        return req.user;
    }
}

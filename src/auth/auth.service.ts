import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { Crypt } from 'src/common/crypt/crypt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService,
    ) {}

    public async validateUser(
        username: string,
        password: string,
    ): Promise<any> {
        const user = await this.usersService.findOneByUsername(username);
        const arePasswordsSame = await Crypt.isHashSame(
            password,
            user.password,
        );

        if (user && arePasswordsSame) {
            const { password, ...result } = user;
            return result;
        }

        return null;
    }

    public async login(user: any) {
        const payload = { username: user.username, sub: user._id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}

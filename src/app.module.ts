import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import { MongooseModule } from "@nestjs/mongoose";
import { FileModule } from "./file/file.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import {ConfigModule} from "@nestjs/config";
import { resolve } from "path";
@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TrackModule,
        FileModule,
        MongooseModule.forRoot(process.env.DB_URL),
        ServeStaticModule.forRoot({rootPath: resolve(__dirname, 'static')}),
    ]
})
export class AppModule {}
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TrackController } from "./track.controller";
import { TrackService } from "./track.service";
import { Track, TrackSchema } from "./schemas/track.schema";
import { Comment, CommentChema } from "./schemas/comment.schema";
import { FileService } from "src/file/file.service";


@Module({
    imports:[
        MongooseModule.forFeature([{name:Track.name, schema:TrackSchema}]),
        MongooseModule.forFeature([{name:Comment.name, schema:CommentChema}])

    ],
    controllers:[TrackController],
    providers:[TrackService, FileService]
})
export class TrackModule {

}
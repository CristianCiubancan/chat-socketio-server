import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { Chat } from "./Chat";
import { User } from "./User";

@Entity()
export class ChatMembers extends BaseEntity {
  @PrimaryColumn()
  memberId: number;

  @PrimaryColumn()
  chatId: number;

  @ManyToOne(() => User, (user) => user.chats, { primary: true })
  @JoinColumn({ name: "memberId" })
  user: User;

  @ManyToOne(() => Chat, (chat) => chat.members, { primary: true })
  @JoinColumn({ name: "chatId" })
  chat: Chat;
}

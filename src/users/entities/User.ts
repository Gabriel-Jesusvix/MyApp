import { v4 as uuidv4 } from 'uuid'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm'
import { Role } from '@roles/entities/Role'
import { Exclude, Expose } from 'class-transformer'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id?: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  @Exclude()
  password: string

  @Column()
  avatar?: string

  @Column()
  isAdmin: boolean

  @ManyToOne(() => Role, {
    cascade: true,
  })
  role: Role

  @CreateDateColumn()
  created_at: Date

  @Expose({ name: 'avatar_url' })
  getAvatarUrl(): string | null {
    if (!this.avatar) {
      return null
    }

    return `${process.env.AVATAR_URL}/${this.avatar}`
  }
  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}

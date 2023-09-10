import { v4 as uuidv4 } from 'uuid'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm'

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id?: string

  @Column()
  name: string

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}

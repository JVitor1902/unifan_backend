import { Column, Entity, PrimaryColumn } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("tasks")
export class Task {
    @PrimaryColumn()
    id: string

    @Column({ nullable: false })
    description: string

    @Column()
    date_task: Date

    @Column()
    status: boolean

    constructor(){
        this.id = uuid()
        this.status = false 
    }
}
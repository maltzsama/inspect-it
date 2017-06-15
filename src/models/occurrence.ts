export class OccurrenceModel {
    id: string;
    inspection_id: string;
    description: string;
    kind: string;
    severity: string;
    created_at: number;
    updated_at: number;
    constructor(){
        this.id = this.random_id();
        this.description = "";
        this.severity = "";
        this.kind = "";
        this.created_at = Date.now();
        this.updated_at = Date.now();
    }
    random_id(){
        return '_' + Math.random().toString(36).substr(2, 9);
    }

}
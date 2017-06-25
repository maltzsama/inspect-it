export class InspectionModel {
    id: string;
    company_id: string;
    name: string;
    created_at: string;
    updated_at: string;
    constructor(){
        this.id = this.random_id();
        console.log("========"+this.id);
        this.name = "";
        this.created_at = Date.now().toString();
        this.updated_at = Date.now().toString();
    }
    random_id(){
        return '_' + Math.random().toString(36).substr(2, 9);
    }

}
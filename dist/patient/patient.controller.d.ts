/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
export declare class PatientController {
    private readonly patientService;
    constructor(patientService: PatientService);
    create(createPatientDto: CreatePatientDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/patient.entity").Patient> & Omit<import("./entities/patient.entity").Patient & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    createplandate(plandate: CreatePatientDto): Promise<any>;
    deleteplandate(value: any): Promise<any>;
    addMeal(value: any): Promise<any>;
    addGuide(value: any): Promise<any>;
    deletelan(value: any): Promise<any>;
    deleteguide(value: any): Promise<any>;
    updateplan(value: any): Promise<any>;
    updateGuide(value: any): Promise<any>;
    addpatient(value: any): Promise<import("mongoose").Document<unknown, {}, import("./entities/patient.entity").Patient> & Omit<import("./entities/patient.entity").Patient & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    updatestatus(value: any): Promise<import("mongoose").Document<unknown, {}, import("./entities/patient.entity").Patient> & Omit<import("./entities/patient.entity").Patient & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./entities/patient.entity").Patient> & Omit<import("./entities/patient.entity").Patient & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    remove(id: string): void;
}

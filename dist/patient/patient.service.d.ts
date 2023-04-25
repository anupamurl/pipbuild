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
/// <reference types="mongoose/types/inferschematype" />
import { CreatePatientDto } from './dto/create-patient.dto';
import { Patient } from './entities/patient.entity';
import { Model } from 'mongoose';
export declare class PatientService {
    private readonly patientModel;
    constructor(patientModel: Model<Patient>);
    create(createPatientDto: CreatePatientDto): Promise<import("mongoose").Document<unknown, {}, Patient> & Omit<Patient & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Patient> & Omit<Patient & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    addplandate(plandate: any): Promise<import("mongoose").Document<unknown, {}, Patient> & Omit<Patient & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    addMeal(id: any, mealplan: any, plandate: any): Promise<import("mongoose").Document<unknown, {}, Patient> & Omit<Patient & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    addGuideLine(id: any, guideline: any, plandate: any): Promise<import("mongoose").Document<unknown, {}, Patient> & Omit<Patient & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    deleteMeal(pid: any, itemId: any, plandate: any): Promise<import("mongoose").Document<unknown, {}, Patient> & Omit<Patient & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    deleteGuide(pid: any, itemId: any, plandate: any): Promise<import("mongoose").Document<unknown, {}, Patient> & Omit<Patient & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    updateMeal(id: any, guideline: any, plandate: any, updateGuideID: any, type: any, time: any, mealhtml: any): Promise<import("mongoose").Document<unknown, {}, Patient> & Omit<Patient & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    updateGuide(id: any, guideline: any, plandate: any, updateGuideID: any): Promise<import("mongoose").Document<unknown, {}, Patient> & Omit<Patient & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    addPatient(obj: any): Promise<import("mongoose").Document<unknown, {}, Patient> & Omit<Patient & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    updateStatus(obj: any): Promise<import("mongoose").Document<unknown, {}, Patient> & Omit<Patient & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    removedeletediteplan(pid: any, plandate: any): Promise<import("mongoose").Document<unknown, {}, Patient> & Omit<Patient & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
}

export class AddErrorHttpDTO {
    public ErrorNumber: number;
    public ErrorCode: string;
    public ErroMessage: string;
    public ErrorDescription: string;
    public ModuleId: string;
    constructor(moduleid:string)
    {
        this.ModuleId = moduleid;
    }
}
export class DeleteErrorHttpDTO {
    public ErrorId: string;
    constructor(errorid:string)
    {
        this.ErrorId = errorid;
    }
}
export class GetErrorHttpDTO {
    public errorNumber: number;
    public errorCode: string;
    public erroMessage: string;
    public errorDescription: string;
    public moduleId: string;
    public errorId: string;
}
export class GetErrorHttpDTOWithSelect {
    public errorNumber: number;
    public errorCode: string;
    public erroMessage: string;
    public errorDescription: string;
    public moduleId: string;
    public errorId: string;
    public selected:boolean;
    constructor(dto:GetErrorHttpDTO)
    {
        this.erroMessage = dto.erroMessage;
        this.errorCode = dto.errorCode;
        this.errorDescription = dto.errorDescription;
        this.errorId = dto.errorId;
        this.errorNumber = dto.errorNumber;
        this.moduleId = dto.moduleId;
        this.selected = false;
    }
}


export class UpdateErrorHttpDTO {
    public ErrorNumber: number;
    public ErrorCode: string;
    public ErroMessage: string;
    public ErrorDescription: string;
    public ModuleId: string;
    public ErrorId: string;
    constructor(dto:GetErrorHttpDTO)
    {
        this.ErroMessage = dto.erroMessage;
        this.ErrorCode = dto.errorCode;
        this.ErrorDescription = dto.errorDescription;
        this.ErrorId = dto.errorId;
        this.ErrorNumber = dto.errorNumber;
        this.ModuleId = dto.moduleId;
    }
}
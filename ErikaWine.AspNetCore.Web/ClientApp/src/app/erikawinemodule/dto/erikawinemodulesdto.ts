export class AddModuleHttpDTO{
    public  ModuleName :string;
    public  ModuleDescription  :string;
    public  ModuleErrorPrefix  :string;
    public  ProjectId  :string;
    constructor(projectId:string)
    {
        this.ProjectId = projectId;
    }
}
export class DeleteModuleHttpDTO{
    public ModulesId:string;
    constructor(medulesid:string)
    {
        this.ModulesId = medulesid;
    }
}
export class GetModuleHttpDTO{
    public modulesId:string;
    public  moduleName :string;
    public  moduleDescription  :string;
    public  moduleErrorPrefix  :string;
    public  projectId  :string;

}
export class UpdateModuleHttpDTO{
    public ModulesId:string;
    public  ModuleName :string;
    public  ModuleDescription  :string;
    public  ModuleErrorPrefix  :string;
    public  ProjectId  :string;
    constructor(moduledto:GetModuleHttpDTO)
    {
        this.ModulesId = moduledto.modulesId;
        this.ProjectId = moduledto.projectId;
        this.ModuleName = moduledto.moduleName;
        this.ModuleErrorPrefix = moduledto.moduleErrorPrefix;
        this.ModuleDescription = moduledto.moduleDescription;
    }
}
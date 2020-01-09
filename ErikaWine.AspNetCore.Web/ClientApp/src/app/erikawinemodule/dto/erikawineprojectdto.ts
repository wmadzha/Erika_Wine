export class AddProjectHttpDTO {
    public ProjectName: string;
    public ProjectDescription: string;
}
export class DeleteProjectHttpDTO {
    public  ProjectId:string;
    constructor(projectId:string)
    {
        this.ProjectId = projectId;
    }
}
export class GetProjectHttpDTO {
    public projectName: string;
    public projectDescription: string;
    public projectId:string;
}
export class UpdateProjectHttpDTO {
    public ProjectName: string;
    public ProjectDescription: string;
    public ProjectId:string;
    constructor(dto:UpdateProjectHttpDTO)
    {
        this.ProjectId = dto.ProjectId;
        this.ProjectName = dto.ProjectName;
        this.ProjectDescription = dto.ProjectDescription;
    }
}
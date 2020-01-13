export class PagesHelpDTO{
    public HelpPagesId:number;
    public HelpPageTitle :string;
    public HelpPageContent : string;
    public ContentIsPureHtml:boolean;
}

export const HelpPages:PagesHelpDTO[]=[
    {
        HelpPagesId: 1,
        ContentIsPureHtml:false,
        HelpPageTitle:'What Is Projects ?',
        HelpPageContent:
        `
            Projects is like a container for your modules, each projects might have alot of modules 
            where each module is designed to solve a specific problem domain or certain features in
            an existing project.
        `,
    },
]

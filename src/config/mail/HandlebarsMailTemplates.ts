import handlebars from 'handlebars';

interface ItemplateVariable {
  [key: string]: string | number;
}

interface IParseMailTemplate {
  template: string;
  variables: ItemplateVariable;
}
class HandlebarsMailTemplates {
  public async parse({
    template,
    variables,
  }: IParseMailTemplate): Promise<string> {
    const parseTemplate = handlebars.compile(template);

    return parseTemplate(variables);
  }
}

export default HandlebarsMailTemplates;

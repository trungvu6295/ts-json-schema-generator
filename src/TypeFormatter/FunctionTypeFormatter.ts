import { Definition } from "../Schema/Definition";
import { SubTypeFormatter } from "../SubTypeFormatter";
import { BaseType } from "../Type/BaseType";
import { FunctionType } from "../Type/FunctionType";

export class FunctionTypeFormatter implements SubTypeFormatter {
    public supportsType(type: FunctionType): boolean {
        return type instanceof FunctionType;
    }

    public getDefinition(_type: FunctionType): Definition {
        // Return a custom schema for the function property.
        return {};
    }

    public getChildren(_type: FunctionType): BaseType[] {
        return [];
    }
}

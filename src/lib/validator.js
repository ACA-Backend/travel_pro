export class Validator
{
    errors = {};

    validate(schema, request)
    {
        const {error, value} = schema.validate(request, {abortEarly: false});

        if (error)
        {
            error.details.forEach((detail) =>
            {
                //get red of the double quotes in the message
                this.errors[detail.path] = String(detail.message).replace(/"/g, '');
            });

            return {
                errors: this.errors 
            }


        }

        return {
            value
        }

    }
}
import {updateEnv} from "../../lib/util.js";
import {config} from "dotenv";

beforeAll(() =>
{
    config();
});

test('it updates the enviroonmental variables', () =>
{
    updateEnv({NODE_ENV: 'test'})
    expect(process.env.NODE_ENV).toBe('test');
});

afterEach(() =>
{
    updateEnv({NODE_ENV: 'development'});
});
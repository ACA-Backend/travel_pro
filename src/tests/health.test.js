import {app} from "../bootstrap/server.js";
import request from "supertest";

describe("Basic application health test", () =>
{
    test("the application should return a 200 when it is running", async function ()
    {
        const response = await request(app).get('/health');

        expect(response.status).toBe(200);

    });
})
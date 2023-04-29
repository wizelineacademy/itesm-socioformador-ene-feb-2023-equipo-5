import { Form } from "@remix-run/react"
import { s3UploaderHandler } from "../services/uploader-handler.server";
import { redirect, unstable_parseMultipartFormData } from "@remix-run/node";

export default function uploadVideos() {
    return (
        <div>
            <Form method="post" encType="multipart/form-data">
                <input type="file" name='prueba' />
                <button type="submit">Enviar</button>
            </Form>
        </div>
    )
}

export const action = async ({ request }: any) => {
    const formData = await unstable_parseMultipartFormData(request, s3UploaderHandler)

    const archivo = formData.get('prueba')

    console.log(archivo)

    return redirect(`/`)
}
export default function TestsPages() {
    return(
        <>
            <div className="flex flex-row">
                <div className="basis-1/2">
                    <p>Evaluaciones</p>
                    <p>Aqui va el componente de la tabla</p>
                    <div className="flex space-x-8 place-content-center">
                        <button className="py-2 w-40 rounded-md bg-blue-200">Repetir prueba</button>
                        <button className="py-2 w-40 rounded-md bg-blue-200">Recursos</button>
                    </div>
                </div>
                <div className="basis-1/2">
                    <p>Puntaje Máximo: *prop de puntaje maximo*</p>
                    <p>Aqui va la tabla</p>
                    <div className="mx-12 p-3 rounded-md bg-gray-200">
                        <p>Recomendaciones</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper malesuada justo, eget aliquam magna maximus eget. Vivamus porta mauris iaculis, luctus erat vel, rhoncus erat. Praesent elit tortor, feugiat ac lectus eget, aliquam vulputate orci. Vivamus pulvinar lacus ut dui tempor porta laoreet suscipit magna. Integer dapibus pellentesque nisi vitae efficitur. Etiam diam ipsum, maximus ut pharetra at, lobortis in felis. Etiam sit amet tortor id augue ultricies tempor quis eget orci. Aenean ligula eros, tempor eget blandit ut, elementum vel nulla. Nullam laoreet sodales arcu at pulvinar. Nunc posuere enim ex. Praesent auctor lacus vitae suscipit lacinia. Nam non orci et erat sagittis aliquet. Aenean pellentesque quis leo at efficitur. Nullam suscipit ultricies tempus.
                            <br/><br/>
                            Nullam non vestibulum lorem. In ornare sodales ligula, vulputate rutrum lorem varius quis. Etiam placerat luctus egestas. Quisque pharetra, sapien vitae vulputate commodo, orci leo molestie tortor, eu porta magna nunc sed tellus. Nam scelerisque ultricies nulla, vel lobortis dolor sodales quis. Nunc ac odio consequat, fermentum diam at, iaculis diam. Nullam ultrices felis in leo pretium porttitor. Praesent venenatis vulputate lorem, sed convallis enim ultricies ac. Morbi urna metus, dapibus eget sodales sed, vulputate vel erat. Sed ut egestas augue. Donec rhoncus dictum leo, at vulputate nunc scelerisque in. Nulla volutpat justo nulla, eu vulputate ex cursus quis. Nunc in diam a erat bibendum dapibus sit amet id felis.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
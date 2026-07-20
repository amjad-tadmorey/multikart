// app/product/[id]/loading.tsx

export default function Loading() {
    return (
        <div className="space-y-12 animate-pulse">

            {/* Header */}
            <div className="bg-lighter py-8">
                <div className="mx-auto h-10 w-64 rounded bg-neutral-200" />
                <div className="mx-auto mt-3 h-4 w-48 rounded bg-neutral-200" />
            </div>


            {/* Main Layout */}
            <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-6 lg:grid-cols-3 lg:px-20">


                {/* Gallery */}
                <div className="lg:col-span-2 flex flex-col gap-8 lg:flex-row">


                    <div className="w-full lg:w-[420px]">

                        {/* Main Image */}
                        <div className="aspect-[4/5] rounded bg-neutral-200" />


                        {/* Thumbnails */}
                        <div className="mt-4 flex gap-4">

                            {[1, 2, 3].map((item) => (
                                <div
                                    key={item}
                                    className="
                                        h-24
                                        w-24
                                        rounded
                                        bg-neutral-200
                                    "
                                />
                            ))}

                        </div>

                    </div>




                    {/* Product Info */}

                    <div className="w-full space-y-6">


                        <div className="h-5 w-64 rounded bg-neutral-200" />


                        <div className="space-y-2">

                            <div className="h-8 w-80 rounded bg-neutral-200" />

                            <div className="h-8 w-40 rounded bg-neutral-200" />

                        </div>



                        <div className="h-5 w-36 rounded bg-neutral-200" />



                        <div className="h-10 w-32 rounded bg-neutral-200" />



                        <div className="h-14 rounded bg-neutral-200" />


                        <div className="space-y-3">

                            <div className="h-14 rounded bg-neutral-200" />

                            <div className="h-14 rounded bg-neutral-200" />

                        </div>


                    </div>


                </div>





                {/* Sidebar */}

                <aside>

                    <div
                        className="
                            rounded
                            border
                            border-neutral-100
                            p-6
                            space-y-6
                        "
                    >

                        <div className="mx-auto h-8 w-24 rounded bg-neutral-200" />


                        <div className="h-12 rounded bg-neutral-200" />


                        <div className="grid grid-cols-2 gap-3">

                            <div className="h-12 rounded bg-neutral-200" />

                            <div className="h-12 rounded bg-neutral-200" />

                        </div>


                        <div className="h-3 rounded bg-neutral-200" />


                    </div>

                </aside>


            </section>


        </div>
    );
}
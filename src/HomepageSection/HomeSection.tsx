

function HomeSection(){



     return(
        <div className="w-11/12 mx-auto">
            <h1 className="text-2xl font-bold mb-4">Task List</h1>
            <ul className="space-y-2">
                <li className="p-4 border border-gray-200 rounded">
                    <h2 className="font-semibold">Task Title</h2>
                    <p className="text-gray-600">Task description goes here.</p>
                </li>

            </ul>
        </div>
    )
}

export default HomeSection
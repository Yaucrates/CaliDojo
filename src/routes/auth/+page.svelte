<script>
    import CaliDojo from "$lib/CaliDojo.svelte";
</script>

<form method="POST" action="?/login" class="flex">
    <div class="w-1/2 flex flex-col">
        <header>
            <nav class="px-12 pt-6 pb-4 flex justify-between items-center">
                <a href="/">
                    <CaliDojo scale={0.04}/>
                </a>
            </nav>
        </header>

        <div class="h-full px-40 flex flex-col justify-center items-center">
            <div class="gap-6 flex flex-col">
                <div class="gap-2 flex flex-col">
                    <h1 class="text-base text-neutral-600">Resume your journey</h1>
                    <h2 class="text-4xl font-semibold">Login to CaliDojo</h2>
                </div>
                <label class="gap-1 flex flex-col">
                    <div>Email <span class="text-red-600">*</span></div>
                    <input name="email" type="email" class="p-2 border-[1px] border-black rounded-md" />
                </label>
                <label class="gap-1 flex flex-col">
                    <div>Password <span class="text-red-600">*</span></div>
                    <input name="password" type="password" class="p-2 border-[1px] border-black rounded-md" />
                </label>
                <button class="p-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white transition-colors duration-300">Log In</button>
                <p>Don't have an account? Click <a href="/#pricing" class="text-blue-600 hover:text-blue-700 transition-colors duration-300">here</a> to join!</p>
            </div>
        </div>
    </div>
    <div class="w-1/2 h-screen overflow-hidden box-border">
        <img src="abstract-login.jpg" alt="abstract art" />
    </div>
</form>
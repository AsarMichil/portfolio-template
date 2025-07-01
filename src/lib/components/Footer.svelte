<script>
  import { getSiteConfig } from '$lib/utils/content';
  
  const config = getSiteConfig();
</script>

<footer class="border-t-2 border-gray-200 bg-gray-50 mt-20">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Contact Info -->
      <div>
        <h3 class="font-bold lowercase text-lg mb-4">get in touch</h3>
        <div class="space-y-2">
          <p class="text-base md:text-lg text-gray-700 leading-relaxed">
            <a href="mailto:{config.email}" class="hover:text-primary transition-colors">
              {config.email}
            </a>
          </p>
          {#if config.location}
            <p class="text-sm md:text-base text-gray-600">{config.location}</p>
          {/if}
        </div>
      </div>
      
      <!-- Navigation -->
      <div>
        <h3 class="font-bold lowercase text-lg mb-4">navigate</h3>
        <div class="space-y-2">
          <p>
            <a href="/portfolio" class="text-base md:text-lg text-gray-700 leading-relaxed hover:text-primary transition-colors">
              portfolio
            </a>
          </p>
          <p>
            <a href="/about" class="text-base md:text-lg text-gray-700 leading-relaxed hover:text-primary transition-colors">
              about
            </a>
          </p>
          <p>
            <a href="/contact" class="text-base md:text-lg text-gray-700 leading-relaxed hover:text-primary transition-colors">
              contact
            </a>
          </p>
        </div>
      </div>
      
      <!-- Social Links -->
      <div>
        <h3 class="font-bold lowercase text-lg mb-4">connect</h3>
        <div class="space-y-2">
          {#if config.social.github}
            <p>
              <a 
                href="https://github.com/{config.social.github}" 
                class="text-base md:text-lg text-gray-700 leading-relaxed hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
            </p>
          {/if}
          {#if config.social.linkedin}
            <p>
              <a 
                href="https://linkedin.com/in/{config.social.linkedin}" 
                class="text-base md:text-lg text-gray-700 leading-relaxed hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin
              </a>
            </p>
          {/if}
          {#if config.social.twitter}
            <p>
              <a 
                href="https://twitter.com/{config.social.twitter}" 
                class="text-base md:text-lg text-gray-700 leading-relaxed hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                twitter
              </a>
            </p>
          {/if}
          {#if config.social.instagram}
            <p>
              <a 
                href="https://instagram.com/{config.social.instagram}" 
                class="text-base md:text-lg text-gray-700 leading-relaxed hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                instagram
              </a>
            </p>
          {/if}
        </div>
      </div>
    </div>
    
    <!-- Bottom Bar -->
    <div class="border-t-2 border-gray-200 mt-8 pt-8 text-center">
      <p class="text-sm md:text-base text-gray-600">
        © {new Date().getFullYear()} {config.name}. no rights reserved.
      </p>
    </div>
  </div>
</footer> 
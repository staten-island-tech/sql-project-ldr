<script>
import RequestCard from '../components/templates/RequestCards.vue'
import { useAuthStore } from '../stores/counter'
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://tzithwsneecztaewiwhj.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6aXRod3NuZWVjenRhZXdpd2hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM2Mzk5MjksImV4cCI6MTk5OTIxNTkyOX0.YeSE7Cuk2UX5jD6haxAnmM_-RdlssSRtowQH9ejl_1w'
const supabase = createClient(supabaseUrl, supabaseKey)
export default {
  components: { RequestCard },
  data() {},
  methods: {
    checkUser: function () {
      if (useAuthStore().currentUser === null) {
        window.location.href = 'loginpage'
      } else {
      }
    }
  },
  mounted() {
    this.checkUser()
  }
}
</script>

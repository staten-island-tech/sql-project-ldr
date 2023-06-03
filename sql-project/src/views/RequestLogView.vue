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
  data() {
    return {
      customer_id: '',
      user: useAuthStore(),
      userData: ''
    }
  },
  methods: {
    onMounted: async function () {
      this.checkUser()
      this.customer_id = this.user.currentUser
      this.cardData()
    },
    cardData: async function () {
      let dogRequests = await this.requestGetter('DogSitters')
      let catRequests = await this.requestGetter('CatSitters')
      let data = dogRequests.concat(catRequests)
      this.userData = data
      console.log(this.userData)
    },
    checkUser: function () {
      if (useAuthStore().currentUser === null) {
        window.location.href = 'loginpage'
      } else {
      }
    },
    requestGetter: async function (table) {
      const { data, error } = await supabase
        .from(table)
        .select('*')
        .eq('customer_id', this.customer_id)
      console.log(error)
      console.log(data)
      return data
    }
  },
  mounted() {
    this.onMounted()
  }
}
</script>

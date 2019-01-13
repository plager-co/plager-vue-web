<script>
import NewQuestion from '@/components/NewQuestion'

export default {
  components: { NewQuestion },
  data () {
    return {
      step: 'name',
      name: '',
      questions: []
    }
  },
  methods: {

    //
    // omitting other methods
    //

    submitSurvey: function() {
      this.$store.dispatch('submitNewSurvey', {
        name: this.name,
        questions: this.questions
      })
        .then(() => this.$router.push('/'))
        .catch((error) => {
          console.log('Error creating survey', error)
          this.$router.push('/')
        })
    }
  }
}
</script>

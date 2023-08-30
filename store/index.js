export const actions = {
  async getProjectList(commit, key) {
    const response = await this.$axios.get('api/v1/posts', {
      params: key,
      headers: {
        "Content-Type": "application/json"
      }
    })
    return response

  },
  async getProject(commit, id) {
    const response = await this.$axios.get('api/v1/posts/' + id)
    return response;
  },
  async deleteProject(commit, id) {
    await this.$axios.delete('api/v1/posts/' + id);
  },
  async postProject(commit, data) {
    await this.$axios.$post('api/v1/posts', data, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(function (response) {
        if (response != 0) {
          window.location.reload()
        }
      }.bind(this))
      .catch(function (error) {
        console.log(error)
      })
  },
  async updateProject(commit, data) {
    await this.$axios.put('api/v1/posts/' + data.id, data, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(function (response) {
        if (response != 0) {
          window.location.reload()
        }
      }.bind(this))
      .catch(function (error) {
        console.log(error)
      })
  }
}
export const state = {
  projectList: ''
}

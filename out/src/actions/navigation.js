export default function setActivePage(title, page) {
  return {
    type: 'SET_ACTIVE_PAGE',
    title,
    page,
  }
}
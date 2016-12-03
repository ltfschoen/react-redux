export function skillsFormattedForDropdown(skills) {
  return skills.map(skill => {
    return {
      value: skill.id,
      text: skill.skillName
    };
  });
}

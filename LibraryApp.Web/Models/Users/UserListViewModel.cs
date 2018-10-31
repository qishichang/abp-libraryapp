using System.Collections.Generic;
using LibraryApp.Roles.Dto;
using LibraryApp.Users.Dto;

namespace LibraryApp.Web.Models.Users
{
    public class UserListViewModel
    {
        public IReadOnlyList<UserDto> Users { get; set; }

        public IReadOnlyList<RoleDto> Roles { get; set; }
    }
}
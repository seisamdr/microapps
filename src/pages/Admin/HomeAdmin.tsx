import React from "react";
import NavbarAdmin from "../../components/admin/NavbarAdmin";
import Admin from "../../components/admin/Admin";
import { ListVoter } from "../../mocks/voter";

export default function HomeAdmin() {
  return (
    <>
      <NavbarAdmin />
      <Admin Voters={ListVoter} />
    </>
  );
}

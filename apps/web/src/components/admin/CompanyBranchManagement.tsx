import React, { useEffect, useState } from 'react';
import { Building2, Plus, Pencil, Check, X, Power, PowerOff, Loader2, MapPin } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { API_BASE_URL } from '../../config';
import { handleApiError, toUserFacingError } from '../../utils/userFacingError';

interface Branch {
  id: number;
  company_id: number;
  name: string;
  deleted_at: string | null;
}

interface Company {
  id: number;
  name: string;
  code: string;
  property_type_group: string;
  deleted_at: string | null;
  branches: Branch[];
}

export const CompanyBranchManagement: React.FC = () => {
  const { fetchWithAuth } = useAuth();
  const { showToast, showError } = useToast();

  const [companies, setCompanies] = useState<Company[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [showAddCompany, setShowAddCompany] = useState(false);
  const [newCompanyName, setNewCompanyName] = useState('');
  const [newCompanyCode, setNewCompanyCode] = useState('');
  const [isSavingCompany, setIsSavingCompany] = useState(false);

  const [editingCompanyId, setEditingCompanyId] = useState<number | null>(null);
  const [editCompanyName, setEditCompanyName] = useState('');
  const [editCompanyCode, setEditCompanyCode] = useState('');

  const [addingBranchFor, setAddingBranchFor] = useState<number | null>(null);
  const [newBranchName, setNewBranchName] = useState('');
  const [isSavingBranch, setIsSavingBranch] = useState(false);

  const [editingBranchId, setEditingBranchId] = useState<number | null>(null);
  const [editBranchName, setEditBranchName] = useState('');

  const fetchCompanies = async () => {
    setIsLoading(true);
    try {
      const res = await fetchWithAuth(`${API_BASE_URL}/admin/companies`);
      const data = await res.json();
      if (res.ok) {
        setCompanies(data.companies || []);
      } else {
        await handleApiError(res, showError, data);
      }
    } catch (e) {
      showError(
        toUserFacingError({ message: e instanceof Error ? e.message : String(e), body: e }),
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  const handleAddCompany = async () => {
    if (!newCompanyName.trim() || !newCompanyCode.trim()) {
      showToast('Company name and code are required', 'error');
      return;
    }
    setIsSavingCompany(true);
    try {
      const res = await fetchWithAuth(`${API_BASE_URL}/admin/companies`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newCompanyName.trim(), code: newCompanyCode.trim() }),
      });
      const data = await res.json();
      if (res.ok) {
        showToast('Company created', 'success');
        setNewCompanyName('');
        setNewCompanyCode('');
        setShowAddCompany(false);
        fetchCompanies();
      } else {
        await handleApiError(res, showError, data);
      }
    } catch (e) {
      showError(
        toUserFacingError({ message: e instanceof Error ? e.message : String(e), body: e }),
      );
    } finally {
      setIsSavingCompany(false);
    }
  };

  const startEditCompany = (company: Company) => {
    setEditingCompanyId(company.id);
    setEditCompanyName(company.name);
    setEditCompanyCode(company.code);
  };

  const saveEditCompany = async (companyId: number) => {
    try {
      const res = await fetchWithAuth(`${API_BASE_URL}/admin/companies/${companyId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: editCompanyName.trim(), code: editCompanyCode.trim() }),
      });
      const data = await res.json();
      if (res.ok) {
        showToast('Company updated', 'success');
        setEditingCompanyId(null);
        fetchCompanies();
      } else {
        await handleApiError(res, showError, data);
      }
    } catch (e) {
      showError(
        toUserFacingError({ message: e instanceof Error ? e.message : String(e), body: e }),
      );
    }
  };

  const toggleCompanyActive = async (company: Company) => {
    const action = company.deleted_at ? 'reactivate' : 'deactivate';
    if (
      action === 'deactivate' &&
      !window.confirm(
        `Deactivate "${company.name}"? It will stop appearing anywhere new records can be assigned to it.`,
      )
    ) {
      return;
    }
    try {
      const res = await fetchWithAuth(`${API_BASE_URL}/admin/companies/${company.id}/${action}`, {
        method: 'POST',
      });
      const data = await res.json();
      if (res.ok) {
        showToast(`Company ${action}d`, 'success');
        fetchCompanies();
      } else {
        await handleApiError(res, showError, data);
      }
    } catch (e) {
      showError(
        toUserFacingError({ message: e instanceof Error ? e.message : String(e), body: e }),
      );
    }
  };

  const handleAddBranch = async (companyId: number) => {
    if (!newBranchName.trim()) {
      showToast('Branch name is required', 'error');
      return;
    }
    setIsSavingBranch(true);
    try {
      const res = await fetchWithAuth(`${API_BASE_URL}/admin/branches`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ company_id: companyId, name: newBranchName.trim() }),
      });
      const data = await res.json();
      if (res.ok) {
        showToast('Branch created', 'success');
        setNewBranchName('');
        setAddingBranchFor(null);
        fetchCompanies();
      } else {
        await handleApiError(res, showError, data);
      }
    } catch (e) {
      showError(
        toUserFacingError({ message: e instanceof Error ? e.message : String(e), body: e }),
      );
    } finally {
      setIsSavingBranch(false);
    }
  };

  const startEditBranch = (branch: Branch) => {
    setEditingBranchId(branch.id);
    setEditBranchName(branch.name);
  };

  const saveEditBranch = async (branchId: number) => {
    try {
      const res = await fetchWithAuth(`${API_BASE_URL}/admin/branches/${branchId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: editBranchName.trim() }),
      });
      const data = await res.json();
      if (res.ok) {
        showToast('Branch updated', 'success');
        setEditingBranchId(null);
        fetchCompanies();
      } else {
        await handleApiError(res, showError, data);
      }
    } catch (e) {
      showError(
        toUserFacingError({ message: e instanceof Error ? e.message : String(e), body: e }),
      );
    }
  };

  const toggleBranchActive = async (branch: Branch) => {
    const action = branch.deleted_at ? 'reactivate' : 'deactivate';
    if (action === 'deactivate' && !window.confirm(`Deactivate branch "${branch.name}"?`)) {
      return;
    }
    try {
      const res = await fetchWithAuth(`${API_BASE_URL}/admin/branches/${branch.id}/${action}`, {
        method: 'POST',
      });
      const data = await res.json();
      if (res.ok) {
        showToast(`Branch ${action}d`, 'success');
        fetchCompanies();
      } else {
        await handleApiError(res, showError, data);
      }
    } catch (e) {
      showError(
        toUserFacingError({ message: e instanceof Error ? e.message : String(e), body: e }),
      );
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center p-8">
        <Loader2 className="w-8 h-8 text-navy-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-navy-600" />
            Companies & Branches
          </h3>
          <p className="text-sm text-slate-500 mt-0.5">
            Add and manage companies and their branches without touching code or seed scripts.
          </p>
        </div>
        <button
          onClick={() => setShowAddCompany((v) => !v)}
          className="flex items-center gap-1.5 px-3 py-2 bg-navy-700 hover:bg-navy-800 text-white text-sm font-bold rounded-xl transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Company
        </button>
      </div>

      {showAddCompany && (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 grid grid-cols-1 md:grid-cols-3 gap-3">
          <input
            type="text"
            placeholder="Company name"
            value={newCompanyName}
            onChange={(e) => setNewCompanyName(e.target.value)}
            className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-navy-500"
          />
          <input
            type="text"
            placeholder="Unique code (e.g. RRH)"
            value={newCompanyCode}
            onChange={(e) => setNewCompanyCode(e.target.value)}
            className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-navy-500"
          />
          <button
            onClick={handleAddCompany}
            disabled={isSavingCompany}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-sm font-bold rounded-lg transition-colors"
          >
            {isSavingCompany ? 'Creating...' : 'Create Company'}
          </button>
        </div>
      )}

      {companies.length === 0 ? (
        <div className="text-center py-12 text-sm text-slate-400 bg-slate-50 rounded-xl border border-slate-100">
          No companies yet.
        </div>
      ) : (
        <div className="space-y-4">
          {companies.map((company) => (
            <div
              key={company.id}
              className={`bg-white rounded-2xl border shadow-sm overflow-hidden ${
                company.deleted_at ? 'border-red-200 opacity-70' : 'border-slate-200'
              }`}
            >
              <div className="p-4 flex items-start justify-between gap-3 bg-slate-50 border-b border-slate-100">
                {editingCompanyId === company.id ? (
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={editCompanyName}
                      onChange={(e) => setEditCompanyName(e.target.value)}
                      className="px-3 py-1.5 border border-slate-300 rounded-lg text-sm"
                    />
                    <input
                      type="text"
                      value={editCompanyCode}
                      onChange={(e) => setEditCompanyCode(e.target.value)}
                      className="px-3 py-1.5 border border-slate-300 rounded-lg text-sm"
                    />
                  </div>
                ) : (
                  <div>
                    <h4 className="font-bold text-navy-900 flex items-center gap-2">
                      {company.name}
                      {company.deleted_at && (
                        <span className="text-[10px] font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded-full">
                          INACTIVE
                        </span>
                      )}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Code: {company.code} · {company.property_type_group}
                    </p>
                  </div>
                )}

                <div className="flex items-center gap-1.5 shrink-0">
                  {editingCompanyId === company.id ? (
                    <>
                      <button
                        onClick={() => saveEditCompany(company.id)}
                        className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded-lg"
                        title="Save"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setEditingCompanyId(null)}
                        className="p-1.5 text-slate-400 hover:bg-slate-100 rounded-lg"
                        title="Cancel"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => startEditCompany(company)}
                        className="p-1.5 text-slate-500 hover:bg-slate-100 rounded-lg"
                        title="Edit"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => toggleCompanyActive(company)}
                        className={`p-1.5 rounded-lg ${
                          company.deleted_at
                            ? 'text-emerald-600 hover:bg-emerald-50'
                            : 'text-red-500 hover:bg-red-50'
                        }`}
                        title={company.deleted_at ? 'Reactivate' : 'Deactivate'}
                      >
                        {company.deleted_at ? (
                          <Power className="w-4 h-4" />
                        ) : (
                          <PowerOff className="w-4 h-4" />
                        )}
                      </button>
                    </>
                  )}
                </div>
              </div>

              <div className="p-4 space-y-2">
                {company.branches.length === 0 ? (
                  <p className="text-xs text-slate-400 italic">No branches yet.</p>
                ) : (
                  company.branches.map((branch) => (
                    <div
                      key={branch.id}
                      className={`flex items-center justify-between gap-3 px-3 py-2 rounded-lg border ${
                        branch.deleted_at
                          ? 'border-red-100 bg-red-50/50 opacity-70'
                          : 'border-slate-100 bg-slate-50'
                      }`}
                    >
                      {editingBranchId === branch.id ? (
                        <input
                          type="text"
                          value={editBranchName}
                          onChange={(e) => setEditBranchName(e.target.value)}
                          className="flex-1 px-2 py-1 border border-slate-300 rounded text-sm"
                        />
                      ) : (
                        <span className="text-sm text-slate-700 flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {branch.name}
                          {branch.deleted_at && (
                            <span className="text-[10px] font-bold text-red-700 bg-red-100 px-1.5 py-0.5 rounded-full">
                              INACTIVE
                            </span>
                          )}
                        </span>
                      )}
                      <div className="flex items-center gap-1 shrink-0">
                        {editingBranchId === branch.id ? (
                          <>
                            <button
                              onClick={() => saveEditBranch(branch.id)}
                              className="p-1 text-emerald-600 hover:bg-emerald-100 rounded"
                            >
                              <Check className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => setEditingBranchId(null)}
                              className="p-1 text-slate-400 hover:bg-slate-200 rounded"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={() => startEditBranch(branch)}
                              className="p-1 text-slate-500 hover:bg-slate-200 rounded"
                            >
                              <Pencil className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => toggleBranchActive(branch)}
                              className={`p-1 rounded ${
                                branch.deleted_at
                                  ? 'text-emerald-600 hover:bg-emerald-100'
                                  : 'text-red-500 hover:bg-red-100'
                              }`}
                            >
                              {branch.deleted_at ? (
                                <Power className="w-3.5 h-3.5" />
                              ) : (
                                <PowerOff className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  ))
                )}

                {addingBranchFor === company.id ? (
                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="text"
                      placeholder="New branch name"
                      value={newBranchName}
                      onChange={(e) => setNewBranchName(e.target.value)}
                      className="flex-1 px-3 py-1.5 border border-slate-300 rounded-lg text-sm"
                    />
                    <button
                      onClick={() => handleAddBranch(company.id)}
                      disabled={isSavingBranch}
                      className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-xs font-bold rounded-lg"
                    >
                      Add
                    </button>
                    <button
                      onClick={() => {
                        setAddingBranchFor(null);
                        setNewBranchName('');
                      }}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold rounded-lg"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setAddingBranchFor(company.id)}
                    className="flex items-center gap-1 text-xs font-bold text-navy-600 hover:text-navy-800 pt-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Add Branch
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
